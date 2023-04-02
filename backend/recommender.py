import pandas as pd

def recommender(user_id):
    try:
        locs_data = pd.read_csv('locs_4u.csv')
        usr_data = locs_data.filter(['num', 'usr_id', 'loc_id'], axis=1)

        df = pd.merge(usr_data, locs_data, on='loc_id', how='inner')

        matrix = df.pivot_table(index='usr_id_x', columns='loc_id', values='rating')
        matrix_norm = matrix.subtract(matrix.mean(axis=1), axis = 'rows')
        user_similarity = matrix_norm.T.corr()

        n = 3
        # User similarity threashold
        user_similarity_threshold = 0.3
        # Get top n similar users
        similar_users = user_similarity[user_similarity[user_id] > user_similarity_threshold][user_id].sort_values(ascending=False)[:n]
        # Print out top n similar users

        similar_user_visited = matrix_norm[matrix_norm.index.isin(similar_users.index)].dropna(axis=1, how='all')

        # A dictionary to store item scores
        item_score = {}
        # Loop through items
        for i in similar_user_visited.columns:
            # Get the ratings for movie i
            loc_rating = similar_user_visited[i]
            # Create a variable to store the score
            total = 0
            # Create a variable to store the number of scores
            count = 0
            # Loop through similar users
            for u in similar_users.index:
                # If the movie has rating
                if pd.isna(loc_rating[u]) == False:
                    # Score is the sum of user similarity score multiply by the movie rating
                    score = similar_users[u] * loc_rating[u]
                    # Add the score to the total score for the movie so far
                    total += score
                    # Add 1 to the count
                    count += 1
            # Get the average score for the item
            item_score[i] = total / count
        # Convert dictionary to pandas dataframe
        item_score = pd.DataFrame(item_score.items(), columns=['loc', 'loc_score'])

        # Sort the movies by score
        ranked_item_score = item_score.sort_values(by='loc_score', ascending=False)
        # Select top m movies
        m = 10
        ranked_item_score.head(m)

        recommended_id = ranked_item_score.iat[0, 0]

        if recommended_id < 0 or recommended_id > 24:
            return 0
        else:
            return recommended_id

    except:
        return 0