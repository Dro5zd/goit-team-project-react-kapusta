import { Div, FirstText, SecondText } from "./BalanceNotification.styled";

export const BalanceNotification = () => {
  return (
    <Div className="balance-notification">
      <FirstText>
        Hello! To get started, enter the current balance of your account!
      </FirstText>
      <SecondText>You can't spend money until you have it :)</SecondText>
    </Div>
  );
};
