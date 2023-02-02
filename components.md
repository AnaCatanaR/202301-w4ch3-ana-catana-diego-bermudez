# DATA

## DATA LAYER

- Phone number
- Is calling (boolean)

## DATA MODIFICATIONS

- Add digit to phone number
- Clear phone number
- Set 'Is calling' (true)
- Set 'Is calling' (false)

# COMPONENTS

## PROVIDER (CONTEXT)

- Contains the function to add a number
- Contains the function to clear the whole number
- Contains the function to call
- Contains the function to hang up

## APP

## INFO

- When receives 'is calling' status true, then it shows 'is calling',
  therefore, it isn't show nothing.

## DISPLAY

- Receives the phone number
- Shows the number

## ACTIONS

- Show the button call
- Show the button hang up.

### ACTION

- One of the 'Action' components takes the function to call
- One of the 'Action' components takes the function to hung up

## KEYBOARD

- Receives 'is calling'
- Disables the keys

### KEY

- Takes the function to add a number
- Takes the function to clear the whole number
