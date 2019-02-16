function removeWord(state, action) {
  const { knowledgeIds } = action;
  const newState = knowledgeIds.reduce((prevState, knowledgeId) => {
    const { [knowledgeId]: someValue, ...nextState } = prevState;
    return nextState;
  }, state);
  return newState;
}

function addKnowledge(state, action) {
  const { knowledgeId, wordId, url, title, understanding } = action;
  return {
    ...state,
    [knowledgeId]: {
      id: knowledgeId,
      wordId,
      url,
      title,
      understanding
    }
  };
}

function updateKnowledge(state, action) {
  const { knowledgeId, url, title, understanding } = action;
  const knowledge = state[knowledgeId];
  return {
    ...state,
    [knowledgeId]: {
      ...knowledge,
      url,
      title,
      understanding
    }
  };
}

function removeKnowledge(state, action) {
  const { knowledgeId } = action;
  const { [knowledgeId]: someValue, ...newState } = state;
  return newState;
}

export default function knowledges(state = {}, action) {
  switch (action.type) {
    case "REMOVE_WORD":
      return removeWord(state, action);
    case "ADD_KNOWLEDGE":
      return addKnowledge(state, action);
    case "UPDATE_KNOWLEDGE":
      return updateKnowledge(state, action);
    case "REMOVE_KNOWLEDGE":
      return removeKnowledge(state, action);
    default:
      return state;
  }
}
