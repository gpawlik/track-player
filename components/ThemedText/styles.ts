import styled from "styled-components/native";

export type ThemedTextType =
  | "default"
  | "title"
  | "defaultSemiBold"
  | "subtitle"
  | "link"
  | "small";

type StyledTextProps = {
  type: ThemedTextType;
  color: string;
};

export const StyledText = styled.Text<StyledTextProps>`
  color: ${({ color }: { color: string }) => color};

  ${({ type }: { type: ThemedTextType }) => {
    switch (type) {
      case "title":
        return `
          font-size: 32px;
          font-weight: bold;
          line-height: 32px;
        `;
      case "defaultSemiBold":
        return `
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
        `;
      case "subtitle":
        return `
          font-size: 20px;
          font-weight: bold;
        `;
      case "link":
        return `
          font-size: 16px;
          line-height: 30px;
          color: #0a7ea4;
        `;
      case "small":
        return `
          font-size: 12px;
          line-height: 14px;
        `;
      case "default":
      default:
        return `
          font-size: 16px;
          line-height: 24px;
        `;
    }
  }}
`;
