import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDurationTime, addTagFilter, removeTagFilter} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDurationTime: (type, value) => dispatch(changeDurationTime(type, value)),
  addTagFilter: (tag) => dispatch(addTagFilter(tag)),
  removeTagFilter: (tag) => dispatch(removeTagFilter(tag)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
