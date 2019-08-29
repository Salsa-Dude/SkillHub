import React, {Fragment, Component} from 'react'
import { Search} from 'semantic-ui-react'

class SearchBar extends Component {
    render() {
        return (
            <Search
            input={{ fluid: true }} 
            size="small"
            className="search-bar"
            // loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            // onSearchChange={_.debounce(this.handleSearchChange, 500, {
            //   leading: true,
            // })}
            // results={results}
            // value={value}
            // {...this.props}
          />
        )
    }
}

export default SearchBar;