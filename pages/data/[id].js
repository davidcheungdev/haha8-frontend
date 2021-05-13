function data(...args) {
  return <div>{ JSON.stringify(args[0].data) }</div>
}

export async function getStaticProps({ params }) {
  // console.log("params", params)
  const data = {
    content: `lorem ipsum of content ${params.id}`
  }

  return { props: { data } }
}

export async function getStaticPaths() {
  return { paths: [{ params: { id : "foo"} }], fallback: false }
}
export default data