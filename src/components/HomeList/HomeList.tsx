import {ITransaction} from '../../redux/transaction/transactionsSlice';
import {BlockAction, BoxDate, BoxMony, DeleteBtn, DeleteSvg, Item, List,} from './HomeList.styled';

interface IHomeListProps {

    deleteExpense: ((_id: string, color: string) => void),
    transactions: ITransaction[]
}

const HomeList = ({deleteExpense, transactions}: IHomeListProps) => {

    return (
        <List>
            {transactions?.map(({description, date, category, amount, _id}: ITransaction) => {
                const color =
                    category === 'Доп. доход' || category === 'З/П' ? 'green' : 'red';
                return (
                    <Item key={_id}>
                        <BlockAction>
                            <h3>{description}</h3>
                            <BoxDate>
                                <p>{date}</p>
                                <p>{category}</p>
                            </BoxDate>
                        </BlockAction>
                        <BoxMony>
                            <p className={color}>
                                {color === 'red' && '-'} {amount}.00 UAH.
                            </p>
                            <DeleteBtn
                                type="button"
                                // @ts-ignore/**/
                                onClick={() => deleteExpense(_id, color)}
                            >
                                <DeleteSvg/>
                            </DeleteBtn>
                        </BoxMony>
                    </Item>
                );
            })}
        </List>
    );
};

export default HomeList;
