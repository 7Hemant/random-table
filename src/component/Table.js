import React from "react";
import { RiArrowUpDownFill } from "react-icons/ri";
import "./Table.css";
const Table = (tdata) => {
  const { data, type } = tdata;
  return (
    <div>
      <table id="table">
        <thead>
          {type == "type-1" ? (
            <tr>
              <th>
                Name{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
              <th>
                City{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
              <th>
                Email Address{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
              <th>
                Joining Date{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
              <th>
                Role{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
            </tr>
          ) : (
            ""
          )}
          {type == "type-2" ? (
            <tr>
              <th>
                Name{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
              <th>Email Address</th>
              <th>Role</th>
            </tr>
          ) : (
            ""
          )}
          {type == "type-3" ? (
            <tr>
              <th>Email Address</th>
              <th>
                Joining Date{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
              <th>
                Role{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
            </tr>
          ) : (
            ""
          )}
          {type == "type-4" ? (
            <tr>
              <th>Name</th>
              <th>
                City{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
              <th>Joining Date</th>
              <th>
                Role{" "}
                <RiArrowUpDownFill
                  style={{ margin: "2px 0 0 .5rem", cursor: "pointer" }}
                />
              </th>
            </tr>
          ) : (
            ""
          )}
        </thead>
        <tbody>
          {data?.info.map((item, index) => {
            switch (type) {
              case "type-1":
                return (
                  <tr key={index}>
                    <td>{item?.person?.name}</td>
                    <td>{item?.city}</td>
                    <td>
                      <a href={`mailto:${item?.email}`}>{item?.email} </a>
                    </td>
                    <td>{item?.joiningDate}</td>
                    <td>{item?.role}</td>
                  </tr>
                );

              case "type-2":
                return (
                  <tr key={index}>
                    <td>{item?.person?.name}</td>
                    <td>
                      <a href={`mailto:${item?.email}`}>{item?.email} </a>
                    </td>
                    <td>{item?.role}</td>
                  </tr>
                );
              case "type-3":
                return (
                  <tr key={index}>
                    <td>
                      <a href={`mailto:${item?.email}`}>{item?.email} </a>
                    </td>
                    <td>{item?.joiningDate}</td>
                    <td>{item?.role}</td>
                  </tr>
                );
              case "type-4":
                return (
                  <tr key={index}>
                    <td>{item?.person?.name}</td>
                    <td>{item?.city}</td>
                    <td>{item?.joiningDate}</td>
                    <td>{item?.role}</td>
                  </tr>
                );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
