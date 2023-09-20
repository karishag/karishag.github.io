import React from 'react';
import { ReactComponent as ErrorImg } from './error.svg';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
  align-items: center;

  p {
    margin-bottom: 6px;
  }
`,
  StyledTable = styled.div`
  display: flex;
  padding: 20px;

  table {
    border-collapse: collapse;
    th {
      text-align: left;
      padding: 10px 0px;

      span {
        font-weight: 400;
        font-size: 14px;
      }
    }
    tr:nth-child(even){background-color: #f2f2f2;}
    td {
      // border: 1px solid #ddd;
      text-align: left;
      padding: 8px;

      a:link {
        color: black;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }
    }
  }
`;

const UserList = ({ users, showError }) => {
  const createGithubUrl = (url) => {
    const url1 = url.replace('api.', '');

    return url1.replace('users/', '');
  }

  if (showError) {
    // return <img src='./error.svg' alt='error' />
    return (
      <ErrorContainer>
        <ErrorImg style={{ height: 100, width: 100 }} />
        <p>Please try in sometime</p>
        <span>Allowed only 10 requests per minute</span>
      </ErrorContainer>
    )
  }

  return (
    <StyledTable>
      <table>
        <tr>
          <th>Users
            <span>
              &nbsp;(by top no. of followers)
            </span>
          </th>
        </tr>

        {users.map((user) => {
          return <tr>
            <td>
              <a href={createGithubUrl(user.url)} target='_blank' rel="noreferrer">
                {user.login}
              </a >
            </td >
          </tr >

        })}
      </table >
    </StyledTable >
  )
}

export default UserList;