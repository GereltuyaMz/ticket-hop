"use client";

import Image from "next/image";
import styles from "./ticket.module.css";
import { students } from "./students";

type TicketProps = {
  firstName: string;
  lastName: string;
  seatNumber: string;
  studentCode: string;
  studentPassword: string;
};

const TicketPrintingPage = () => {
  return (
    <div className={styles.box}>
      {students.map(
        (
          { firstName, lastName, seatNumber, studentCode, studentPassword },
          index
        ) => {
          return (
            <Ticket
              key={index}
              firstName={firstName}
              lastName={lastName}
              studentCode={studentCode}
              seatNumber={seatNumber}
              studentPassword={studentPassword}
            />
          );
        }
      )}
    </div>
  );
};

const Ticket = ({
  firstName,
  lastName,
  seatNumber,
  studentCode,
  studentPassword,
}: TicketProps) => {
  return (
    <div className={styles.ticketWrapper}>
      <Image src="/ticket-hop.png" width={800} height={300} alt="ticket" />
      <p className={styles.firstname}>
        {firstName} {lastName}
      </p>
      <p className={styles.studentcode}>{studentCode}</p>
      <p className={styles.studentpassword}>{studentPassword}</p>
      <p className={styles.seat}>{seatNumber}</p>
    </div>
  );
};

export default TicketPrintingPage;
