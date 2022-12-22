import { Box, Title, Item } from "./Summary.styled";

export const Summary = () => {
  return (
    <Box>
        <Title>SUMMARY</Title>
      <ul>
        <Item>
          <p>{"November"}</p>
          <p>{"10 000.00"}</p>
        </Item>
        <Item>
          <p>{"October"}</p>
          <p>{"30 000.00"}</p>
        </Item>
        <Item>
          <p>{"September"}</p>
          <p>{"30 000.00"}</p>
        </Item>
        <Item>
          <p>{"August"}</p>
          <p>{"20 000.00"}</p>
        </Item>
        <Item>
          <p>{"July"}</p>
          <p>{"15 000.00"}</p>
        </Item>
        <Item>
          <p>{"June"}</p>
          <p>{"18 000.00"}</p>
        </Item>
      </ul>
    </Box>
  );
};
