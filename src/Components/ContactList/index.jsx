import { useDispatch, useSelector } from "react-redux";
import AlertDialog from "../AlertDialog";

import { Table, TableHead, TableRow, TableCell } from "@mui/material";

function ContactList() {
  const contacts = useSelector((state) => state.contacts);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <tbody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell>{contact.name}</TableCell>
            <TableCell>{contact.username}</TableCell>
            <TableCell>{contact.phone}</TableCell>
            <TableCell>
              <AlertDialog
                contactId={contact.id}
                contactName={contact.name}
                contactPhone={contact.phone}
              />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
}

export default ContactList;
