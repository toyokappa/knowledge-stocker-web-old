const initialState = {};

function addWord(state, action) {
  const { wordId, wordText } = action;
  return {
    ...state,
    [wordId]: {
      id: wordId,
      text: wordText,
      knowledges: []
    }
  };
}

function updateWord(state, action) {
  const { wordId, wordText } = action;
  const word = state[wordId];
  return {
    ...state,
    [wordId]: {
      ...word,
      text: wordText
    }
  };
}

function removeWord(state, action) {
  const { wordId } = action;
  const { [wordId]: someValue, ...newState } = state;
  return newState;
}

function addKnowledge(state, action) {
  const { knowledgeId, wordId } = action;
  const word = state[wordId];
  return {
    ...state,
    [wordId]: {
      ...word,
      knowledges: word.knowledges.concat(knowledgeId)
    }
  };
}

function removeKnowledge(state, action) {
  const { wordId, knowledgeId } = action;
  const word = state[wordId];
  return {
    ...state,
    [wordId]: {
      ...word,
      knowledges: word.knowledges.filter(id => id !== knowledgeId)
    }
  };
}

export default function words(state = initialState, action) {
  switch (action.type) {
    case "ADD_WORD":
      return addWord(state, action);
    case "UPDATE_WORD":
      return updateWord(state, action);
    case "REMOVE_WORD":
      return removeWord(state, action);
    case "ADD_KNOWLEDGE":
      return addKnowledge(state, action);
    case "REMOVE_KNOWLEDGE":
      return removeKnowledge(state, action);
    default:
      return state;
  }
}
