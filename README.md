# emerging_technologies_24

A brief description of what the project does and the problem it solves.

## Table of Contents
1. [Repo Structure](#Repo-Structure)
2. [trigrams.ipynb](#trigrams-ipynb)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [Contributing](#contributing)
6. [License](#license)

## Repo Structure

1. trigrams.ipynb
    - Task 1: Third-order letter approximation model
    - Task 2: Third-order letter approximation generation
    - Task 3. Analyze your model
    - Task 4: Export your model as JSON

2. eliza/ : This has the ELIZA chatbot project.
    - eliza.js
    - index.html
    - style.css

## trigrams.ipynb

## Task 1:
1.   For this task, I worked with five books from Project Gutenberg to build a third-order letter approximation model using trigrams.
    The process involved text cleaning and creating a model that captures three-character sequences (trigrams) and their frequencies.

       ### Function:
       **txtcleaner(text)**
    -   this function removes all characters except uppercase letters, spaces, and full stops,
        and then converting the entire text to uppercase.

       ### Function:
       **new_trigrammodel(text)**
    -   this function extracts every three-character sequence from the cleaned text,
        then counts the number of times each trigram appears.

        ### Output
    - A cleaned and processed string that can be used to build the trigram model.
    - A dictionary where each trigram and its frequency are recorded.
    - A trigram model that captures the frequency of all three-character sequences in the combined text from the five books.     

## Task 2:
2.   In this task, the trigram model created in Task 1 is used to generate a sequence of 10,000 characters. The process starts with an,
    initial two-character string ("TH"), and each subsequent character is predicted based on the preceding two characters, using weighted,
    probabilities derived from the trigram model.

       ### Function: **nextcharecter(trigrammodel, currenttrigram)**
    - This function determines the next character to be added to the text based on the current two-character sequence (bigram).
    - It identifies all trigrams that match the current bigram and selects the next character using weighted probabilities.
    - If no matching trigram is found, it returns None and halts the generation process.

        ### Function: **generatetext(trigrammodel, length=10000, start='TH')**
    - This function generates a string of up to 10,000 characters, starting with the initial two-character string ('TH').
    - It appends one character at a time, determined by the nextcharecter function.
    - The process continues until the desired length is reached or no matching trigrams are found.

        ### Output
    - If no matching trigram is found, it returns None and halts the generation process.
    - A sequence of characters mimicking the patterns in the original input texts.
     

## Task 3:
3.   This task evaluates the quality of the generated text by calculating the percentage of valid English words it contains.
    A list of valid words is loaded from words.txt, and the generated text is split into individual words for comparison.

       ### Function: **text_precentage(text, valid_words)**
    -   This function checks each word in the generated text against a list of valid English words.
    -   It calculates the percentage of valid words in the text to assess its resemblance to real English.

        **Output**
    - A percentage value indicating how many of the generated words are valid English words.

## Task 4:
4.   In this task, the trigram model created in Task 1 is exported to a JSON file for easy storage and future use.

       ### Function: **trigram_dict = dict(trigrammodel)**
    -   Converts the defaultdict containing the trigram model into a regular dictionary.

     ### Function: **json.dump(trigram_dict, json_file)**
    -   Serializes the trigram dictionary and saves it as a JSON file (trigrams.json)

        **Output**
    - The trigram model is successfully saved in JSON format, allowing for reuse in future tasks or applications.


## Features

- Feature 1
- Feature 2

## Technologies Used

- Python
- Flask
- MySQL

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
