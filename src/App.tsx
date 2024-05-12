import styled from "styled-components";
import tw from "twin.macro";

const Text = styled.p`
  ${tw`text-3xl font-bold text-indigo-500 m-4`}
`;

const ContainerBg = styled.div`
${tw`p-3 bg-slate-400 shadow-lg rounded-lg text-white`}
`

function App() {
  return (
    <>
      <Text as="h1">hola mundo</Text>

      <div tw='space-y-5 p-5'>
        <ContainerBg>
          <h3 tw="text-xs border-b">font-sans</h3>
          <p tw="font-sans">
            The quick brown fox jumps over the lazy dog.
          </p>
        </ContainerBg>
      </div>
    </>
  );
}

export default App;
