export function handleChange({ target: { name, value }}) {
  this.setState({ [name]: value });
}
