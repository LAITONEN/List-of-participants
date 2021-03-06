import firebase from '../firebase';
// relative
import { 
		ADD_PARTICIPANT, 
		DELETE_PARTICIPANT, 
		EDIT_PARTICIPANT, 
		FETCH_PARTICIPANTS, 
		SORT_PARTICIPANTS 
	} from './types';

export const fetchParticipants = () => {
	return (dispatch) => {
		firebase.database().ref('/participants').on('value', snapshot => {
			dispatch({ payload: snapshot.val(), type: FETCH_PARTICIPANTS })
		});
	}
}

export const addParticipant = (participant) => {
	return (dispatch) => {
		firebase.database().ref('/participants').push(participant)
		.then(dispatch({ type: ADD_PARTICIPANT }));
	}
}

export const editParticipant = (participant) => {
	return (dispatch) => {
		firebase.database().ref(`/participants/${participant.id}`).set(participant)
		.then(dispatch({ type: EDIT_PARTICIPANT }));
	}
}

export const deleteParticipant = (participantId) => {
	return (dispatch) => {
		firebase.database().ref(`/participants/${participantId}`).remove()
		.then(dispatch({ type: DELETE_PARTICIPANT }));
	}
}

export const sortParticipants = (participants, sortingRules) => {
	return { 
		payload: participants, 
		sortingRules,
		type: SORT_PARTICIPANTS 
	}
}

