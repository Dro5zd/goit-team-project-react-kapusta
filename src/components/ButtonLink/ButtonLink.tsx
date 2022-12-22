import {StyledLink} from './ButtonLink.styled';
import {CSSProperties} from 'react';

interface IButtonLink {
    to: string,
    children: string,
    styled?: CSSProperties | undefined,
    state?: string,
    color?: boolean
}

export const ButtonLink = ({to, children, styled, state, color = false}: IButtonLink) => {
    return (
        <StyledLink to={to} style={styled} state={state}>
            {children}
        </StyledLink>
    );
};
