import { connect } from 'react-redux';
import CharacterList from '../components/CharacterList.jsx';
import { loadCharacters } from '../actions/characterActions'
import {
    getCharacterItems,
    getCharactersLoading,
    getCharactersErrorMessage
} from '../selectors/characterSelectors';
import { getCurrentPage } from '../selectors/pageSelectors';

export const mapStateToProps = (state) => ({
    characters: getCharacterItems(state),
    loading: getCharactersLoading(state),
    error: getCharactersErrorMessage(state),
    page: getCurrentPage(state)
});

export const mapDispatchToProps = ({
    loadCharacters
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);