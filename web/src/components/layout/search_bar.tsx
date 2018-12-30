import * as React from 'react';

interface State {
  search: string;
}

interface Props {
  placeholder: string;
}

export class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { search: '' };
  }

  onInputChange = (term: string) => this.setState({ search: term });

  render() {
    return(
      <div className="search-bar">
        <input
          className="search-bar-input" type="text" placeholder={this.props.placeholder}
          value={this.state.search} onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }
}
