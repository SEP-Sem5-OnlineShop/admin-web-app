import RegisterVendor from '../pages/adminAdd/index';
import React from "react";
import { screen, render ,queryByAttribute } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom";


const getById = queryByAttribute.bind(null, 'id');


describe("AdminAddForm", () => {
  
  it("should render the basic fields",async() => {
    // const  getByText =render(<RegisterVendor />);
    const  dom=render(<RegisterVendor />);

    // expect(getById(dom.container, 'firstName').value="Norr").toBe("Norr");

    
    // expect(document.getElementById('firstName').value = 'Norris').toBe("Norris");
    // expect(document.getElementById('lastName').value = 'Samarathunge').toBe("Samarathunge");
    // expect(document.getElementById('telephone').value = '076666666').toBe("076666666");
    // expect(document.getElementById('email').value = 'jami@gmail.com').toBe("jami@gmail.com");

    userEvent.type(screen.getByLabelText("firstName"),'Jamini');
    userEvent.type(screen.getByLabelText("lastName"),'samarathunge');
    userEvent.type(screen.getByLabelText("telephone"),'076666666');
    userEvent.type(screen.getByLabelText("email"),'jami@gmail.com');
    // screen.debug();

    expect(await screen.findByRole('button', { name: /submit/i })).toBeEnabled();


    
  });

});

  