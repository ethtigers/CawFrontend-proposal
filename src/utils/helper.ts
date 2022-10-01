
export function getHashTags(inputText: string) {

    const regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    const matches = [];
    let match;

    while ((match = regex.exec(inputText))) {
        matches.push(match[ 1 ]);
    }

    return matches;
}

export const getUrls = (text: string) => {

    if (!text)
        return [];

    const matches_http = text.match(/\bhttps?:\/\/\S+/gi);
    const matches_www = text.match(/\bwww?:\/\/\S+/gi);

    let all: string[] = [];

    if (Array.isArray(matches_http))
        all = all.concat(matches_http);

    if (Array.isArray(matches_www))
        all = all.concat(matches_www);

    return all;
}

export const shortenAddress = (address: string) => `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;