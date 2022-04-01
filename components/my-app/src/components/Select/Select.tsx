import * as React from 'react';

interface ISelect {
  value: string;
  onValidChange: () => void;
}

interface IStateSelect {
  value: string;
}

export default class Select extends React.Component<ISelect, IStateSelect> {
  constructor(props: ISelect) {
    super(props);
    this.state = { value: props.value };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: React.ChangeEvent) {
    const val = (e.target as HTMLOptionElement).value;
    console.log(val);
    this.setState({ value: val });
    this.props.onValidChange();
  }

  render() {
    return (
      <>
        <label className="form-item">
          Ваша страна проживания:
          <select>
            <option value="Russia">Russia</option>
            <option value="Belarus">Belarus</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="China">China</option>
          </select>
        </label>
        <br />
      </>
    );
  }
}
