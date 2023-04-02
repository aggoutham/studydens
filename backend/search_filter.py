import numpy as np
from file import *
from gensim.models.keyedvectors import KeyedVectors
from sklearn.metrics.pairwise import cosine_similarity

def load_glove_model():
    glove_model = KeyedVectors.load_word2vec_format("embeds/gensim_glove_vectors.txt", binary=False)
    return glove_model


def get_vectors(word_list, glove_model):
    embeddings = []
    reject_words = ['i', 'to', 'for', 'and', 'so', 'an', 'the', 'what', 'when', 'why', 'how', 'go',
                    'with', 'while', 'let', 'want']

    for word in word_list:
        word = word.lower()
        if word in reject_words:
            continue
        else:
            try:
                vec = glove_model.get_vector(word)
            except:
                vec = glove_model.get_vector('unk')

        embeddings.append(vec)

    return embeddings


def get_important_words(loc):
    words = []
    libraries = ['Pattee', 'Paterno', 'Deike']

    if loc['type'] is not None:
        words.append(loc['type'])

    if loc['space'] is not None:
        words.append(loc['space'])

    if loc['location'] in libraries:
        words.append('Library')

    if loc['food_available']:
        words.append('food')

    description_words = loc['description'].split(" ")
    words.extend([w for w in description_words if w is not None])

    for items in loc['available_tech']:
        if items is not None:
            items = items.split(" ")
            words.extend([w for w in items if w is not None])

    return words


def search_filter(search_str, json_data, glove_model):
    try:
        words = search_str.split(" ")
        search_list_vec = get_vectors(words, glove_model)

        location_score = {}
        filtered_output = []

        i = 0
        for loc in json_data:
            loc_word_list = get_important_words(loc)

            common_list = [word for word in loc_word_list if word in words]
            common_list_vec = get_vectors(common_list, glove_model)

            not_common_list = [word for word in loc_word_list if word not in words]
            not_common_list_vec = get_vectors(not_common_list, glove_model)

            if len(search_list_vec) and len(common_list_vec):
                similarity_matrix_common = cosine_similarity(search_list_vec, common_list_vec)
            else:
                similarity_matrix_common = 0

            if len(search_list_vec) and len(not_common_list_vec):
                similarity_matrix_not_common = cosine_similarity(search_list_vec, not_common_list_vec)
            else:
                similarity_matrix_common = 0

            location_score[i] = 2*np.sum(similarity_matrix_common) + np.sum(similarity_matrix_not_common)
            i += 1

        sorted_loc_ids = sorted(location_score, key=lambda k: location_score[k], reverse=True)

        if len(sorted_loc_ids) > 5:
            sorted_loc_ids = sorted_loc_ids[:5]
        elif len(sorted_loc_ids) > 2 and len(sorted_loc_ids) > 5:
            sorted_loc_ids = sorted_loc_ids[:1]
        else:
            pass

        filtered_output = [json_data[k] for k in sorted_loc_ids]

    except:
        filtered_output = json_data

    return filtered_output

### This is how we run the search filter
# def main():

#     # Load the GloVe model
#     glove_model = load_glove_model()

#     # Search string input
#     search_str = "I want food and alone space"

#     # Input json data
#     json_data = get_locations_data()

#     # Call search_filter function
#     filtered_output = search_filter(search_str, json_data, glove_model)

#     # Dump the filtered output to json
#     # set_locations_data(filtered_output)


# if __name__ == "__main__":
#     main()