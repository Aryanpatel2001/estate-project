import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
// import { useSelector } from "react-redux";

export default function About() {
  const [data, setData] = useState([]);
  const [fontSize, setFontSize] = useState(10);
  // const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/listing/data`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    // let yOffset = 10;
    // let xoffset = 10;

    const headerStyles = {
      fillColor: [240, 240, 240],
      textColor: [0],
      fontFamily: "Newsreader",
      fontStyle: "bold",
    };
    const columnWidths = [15, 90, 30, 30, 23, 30, 30, 30, 30, 30];

    const tableColumn = [
      "Name",
      "description",
      "Address",
      "regularPrice",
      "discountPrice",
      "bathrooms",
      "bedrooms",
      "furnished",
      "parking",
      "offer",
    ];
    const tableRows = [];

    data.forEach((todo) => {
      const todoData = [
        todo.name,
        todo.description,
        todo.address,
        todo.regularPrice,
        todo.discountPrice,
        todo.bathrooms,
        todo.bedrooms,
        todo.furnished,
        todo.parking,
        todo.offer,
      ];
      tableRows.push(todoData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 10,
      headStyles: {
        fillColor: headerStyles.fillColor,
        textColor: headerStyles.textColor,
        fontStyle: headerStyles.fontStyle,
        fontSize: 10, // Adjust the font size as needed
        font: "Newsreader", // Set the font family
        halign: "left",
      },
      columnStyles: {
        0: { cellWidth: columnWidths[0] }, // Adjust column widths as needed
        1: { cellWidth: columnWidths[1] },
        2: { cellWidth: columnWidths[2] },
        3: { cellWidth: columnWidths[3] },
        4: { cellWidth: columnWidths[4] },
        5: { cellWidth: columnWidths[5] },
        6: { cellWidth: columnWidths[6] },
        7: { cellWidth: columnWidths[7] },
        8: { cellWidth: columnWidths[8] },
        9: { cellWidth: columnWidths[9] },
        10: { cellWidth: columnWidths[10] },
      },
      bodyStyles: {
        fontSize: 10, // Adjust the font size for the body
        font: "Newsreader", // Set the font family for the body
        cellPadding: { top: 1, right: 5, bottom: 1, left: 2 }, // Adjust cell padding
        textColor: [0, 0, 0], // Set text color for the body
        rowPageBreak: "avoid", // Avoid row page breaks
      },
      margin: { top: 10, left: 13 },
    });
    doc.save("data.pdf");

    // data.forEach((item, index) => {
    //   doc.text(`Name :${item.name}`, 10, yOffset);
    //   doc.text(`description :${item.description}`, 80, yOffset);

    //   doc
    //     .text(`Address :${item.address}`, 130, yOffset)
    //     .setFontSize(fontSize + 4);
    //   doc
    //     .text(`regularPrice :${item.regularPrice}`, 10, yOffset + 10)
    //     .setFontSize(fontSize + 4);
    //   doc
    //     .text(`discountPrice :${item.discountPrice}`, 80, yOffset + 10)
    //     .setFontSize(fontSize + 4);
    //   doc
    //     .text(`bathrooms :${item.bathrooms}`, 130, yOffset + 10)
    //     .setFontSize(fontSize + 4);
    //   doc.text(`bedrooms :${item.bedrooms}`, 10, yOffset + 20);
    //   doc.text(`furnished :${item.furnished}`, 50, yOffset + 20);
    //   doc.text(`parking :${item.parking}`, 100, yOffset + 20);
    //   doc.text(`offer :${item.offer}`, 10, yOffset + 30);
    //   doc.text(`imageUrls :${item.imageUrls}`, 50, yOffset + 30);

    //   yOffset += 20;

    //   if (index !== data.length - 1) {
    //     doc.addPage();
    //     yOffset = 10;
    //   }
    // });
  };

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-slate-800">
        About Patel Estate
      </h1>
      <p className="mb-4 text-slate-700">
        Patel Estate is a leading real estate agency that specializes in helping
        clients buy, sell, and rent properties in the most desirable
        neighborhoods. Our team of experienced agents is dedicated to providing
        exceptional service and making the buying and selling process as smooth
        as possible.
      </p>
      <p className="mb-4 text-slate-700">
        Our mission is to help our clients achieve their real estate goals by
        providing expert advice, personalized service, and a deep understanding
        of the local market. Whether you are looking to buy, sell, or rent a
        property, we are here to help you every step of the way.
      </p>
      <p className="mb-4 text-slate-700">
        Our team of agents has a wealth of experience and knowledge in the real
        estate industry, and we are committed to providing the highest level of
        service to our clients. We believe that buying or selling a property
        should be an exciting and rewarding experience, and we are dedicated to
        making that a reality for each and every one of our clients.
      </p>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
}
