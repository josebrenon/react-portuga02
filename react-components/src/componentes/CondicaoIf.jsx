export default function CondicaoIf(props) {
  if (props.condicao) {
    return props.children;
  } else {
    return false;
  }
}
