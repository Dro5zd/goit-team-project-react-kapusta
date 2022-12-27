import { selectTransactions } from "../../redux/auth/auth-selectors";
import { useAppSelector } from "../../redux/store";
import {
  BlockAction,
  Item,
  List,
  BoxDate,
  BoxMony,
  DeleteBtn,
} from "./HomeList.styled";
import { DeleteSvg } from "./HomeList.styled";

const HomeList = () => {
  const transactions = useAppSelector(selectTransactions);

  const color = transactions.category;

  return (
    <List>
      {transactions.map(({ description, date, category, amount }) => {
        const color =
          category === "Доп. доход" || category === "З/П" ? "green" : "red";
        return (
          <Item>
            <BlockAction>
              <h3>{description}</h3>
              <BoxDate>
                <p>{date}</p>
                <p>{category}</p>
              </BoxDate>
            </BlockAction>
            <BoxMony>
              <p className={color}>
                {color === "red" && "-"} {amount}.00 UAH.
              </p>
              <DeleteBtn>
                <DeleteSvg />
              </DeleteBtn>
            </BoxMony>
          </Item>
        );
      })}
    </List>
  );
};

export default HomeList;
