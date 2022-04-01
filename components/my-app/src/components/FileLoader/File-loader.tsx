import React from 'react';

interface IStateFile {
  image: string;
}

class FileLoader extends React.Component<Record<string, unknown>, IStateFile> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { image: '' };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: React.ChangeEvent) {
    if ((e.target as HTMLInputElement).files && (e.target as HTMLInputElement).files![0]) {
      this.setState({
        image: URL.createObjectURL((e.target as HTMLInputElement).files![0]),
      });
    }
  }

  render() {
    return (
      <>
        <input type="file" onChange={this.onChange} />
        <br />
      </>
    );
  }
}

export default FileLoader;
