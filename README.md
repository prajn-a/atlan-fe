![atlan-fe](https://github.com/prajn-a/atlan-fe/assets/155552763/9189681d-380c-417f-b4c2-98f8d83fae99)



### Techstack

`Nextjs` with `JavaScript` & `TailwindCSS`

### Dependencies

 - `lucide-react`: Package used for icons
 - `next-themes`: An abstraction to handle themes in nextjs
 - `papaparese`: CSV parser for javascript
 - `sonner`: A toast notification library
 - `codemirror`: It is a code editor component for the web. It can be used in websites to implement a text input field with support for many editing features, and has a rich programming interface to allow further extension.

### Features

- **Toggle Theme** : User can toggle between dark & light theme as per convenience
- **Schema Representation:** User can see schema of available table. This helps user get information about the data type of different field and helps in performing appropriate query.
- **Query Selection** : User can toggle between different available query.
- **History** : Executed query is represented in the history componenent on the sidebar. The user can select these query to execute again.
- **Copy, Clear**: User can copy the query entered in the editor or clear it completely as required.
- **Output**: User can view the output of a particular query execution in the form of table.
- **Export output**: User can export the table retrived as either JSON or CSV as required.
- **Toast Notifications** : User receives toast notification for certain events.

### Run the website locally

```
git clone https://github.com/prajn-a/atlan-fe.git
```

### Setting up the project

```bash
cd atlan-fe

# Install dependencies
npm install
```

### Starting server

```bash
npm dev
```

Server should now be running on [localhost](https://localhost:3000)
