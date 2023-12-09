import { BsSearch } from "react-icons/bs";
const SearchBar = () => {
  return (
    <form className="search flex-fill d-flex align-items-center">
      <div className="input-group">
        <input
          type="text"
          placeholder="جستجوی فست فود..."
          className="form-control rounded-end pe-5 border-success"
        />
        <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3" />
      </div>
    </form>
  );
};

export default SearchBar;
