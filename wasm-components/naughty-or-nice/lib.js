function score(name) {
    // implement the naughty or nice scoring
    return Math.floor(Math.random() * 100) + 1;
}

export const scorer = {
    score: score
}