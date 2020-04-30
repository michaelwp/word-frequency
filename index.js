const wordFrequency = (sentences) => {
    let newSentences;
    let sentencesGroup = {}

    // #1 remove punctuation and split by space
    newSentences = sentences.toLowerCase()
                            .replace(/[^\w\s]|_/g, " ")
                            .replace(/\s+/g, " ")
                            .trim()
                            .split(" ")
                            .sort();

    newSentences.forEach((e) => {
        if (sentencesGroup[e] === undefined) {
            sentencesGroup[e] = 1;
        } else {
            sentencesGroup[e]++;
        }
    })

    return sentencesGroup;
}

module.exports = wordFrequency;
