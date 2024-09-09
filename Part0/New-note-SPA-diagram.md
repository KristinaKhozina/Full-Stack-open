  ```mermaid
 sequenceDiagram
    participant user
    participant browser
    participant server

    user->>browser : Fills out the form and clicks the Save button
    activate browser
    note right of browser: Uses fetched js code to prevent the default handling of form's submit
    note right of browser: Event handler creates a new note and adds it to the notes list
    
    browser-->>user: Rerenders the note list on the page
    deactivate browser
    user->>browser: Looks happily at his note appearing on the list

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    note right of browser: Browser sends created note as JSON data
    server-->>browser: HTTP 201 Created
    deactivate server
```