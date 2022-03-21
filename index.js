const REPLACEMENTS = `.,:;\!*"`.split('');
const ALLOWED = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const BASE_WORD_DELIMITER = ' ';
/**
 * @param {string} str
 * @param {string} find
 * @param {string} replacer
 * @returns 
 */
const replaceAll = function(str, find, replacer){
    return str.split(find).join(replacer);
};

export default class GetWords {

    /**
     * @param {string} str
     */
    getWords(str){

        // Replacements
        REPLACEMENTS.forEach((char)=>{
            str = replaceAll(str, char, BASE_WORD_DELIMITER);
        });

        // Split into words
        const rawWords = str.split(BASE_WORD_DELIMITER);
        
        // Filter
        /**
         * @type {string[]}
         */
        let words = [];
        rawWords.forEach((word)=>{
            if(word === ''){return;}
            if(word === BASE_WORD_DELIMITER){return;}
            let ok = true;
            word.split('').forEach((char)=>{
                if(ALLOWED.indexOf(char) < 0){ok = false;}
            });
            if(!ok){return;}

            words.push(word);
        });

        // Lowercase
        words = words.map((word)=>{
            return word.toLowerCase();
        });

        return words;
    }

    /**
     * @param {string[]} words
     */
    getWordCounts(words){
        /**
         * @type {Record<string, number>}
         */
        const counts = {};
        words.forEach((word)=>{
            counts[word] = !!counts[word] ? ++counts[word] : 1;
        });

        return counts;
    }
}
