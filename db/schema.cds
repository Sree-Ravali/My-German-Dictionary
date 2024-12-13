
namespace german.dictionary;


entity Words {
    key ID      : Integer;
        word    : String;
        meaning : String;
        type    : WordType;
}

type WordType : String enum {
    noun;
    verb;
    adjective;
    adverb;
    pronoun;
    preposition;
    conjunction;
    interjection
};
