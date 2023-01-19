import css from './Filter.module.css';
import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
  return (
    <div className={css.filterSection}>
      <label className={css.filterLabel}>
        <p className={css.filterText}>Find contacts by name</p>
        <input className={css.filterInput} type="text" value={filter} onChange={onChange} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
