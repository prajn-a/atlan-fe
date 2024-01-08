![atlan-fe](https://github.com/prajn-a/atlan-fe/assets/155552763/9189681d-380c-417f-b4c2-98f8d83fae99)

A web-based application capable of running SQL queries and displaying the results of said query. The application includes a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application.

- Data used in the application is taken from [here](https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv)

### Techstack

`Nextjs` with `JavaScript` & `TailwindCSS`

### Dependencies

- `lucide-react`: Package used for icons
- `next-themes`: An abstraction to handle themes in nextjs
- `papaparese`: CSV parser for javascript
- `sonner`: A toast notification library
- `codemirror`: It is a code editor component for the web. It can be used in websites to implement a text input field with support for many editing features, and has a rich programming interface to allow further extension.

### Features

- **Toggle Theme:** Users can switch between dark and light themes for a personalized viewing experience, enhancing readability and reducing eye strain.
- **Schema Representation:** Gain insights into table structures with schema representation, offering a quick overview of data types, aiding users in crafting precise and effective queries.
- **Query Selection** : Seamlessly switch between predefined queries, streamlining the process of exploring and retrieving specific data sets.
- **History** : Access a convenient history of executed queries, empowering users to revisit and rerun previous queries effortlessly for improved workflow efficiency.
- **Copy, Clear**: Easily manage entered queries by copying them for reference or clearing the editor, providing flexibility and control over the query input.
- **Output**: Visualize query results in a tabular format, enabling users to interpret and analyze data output more effectively.
- **Export output**: Empower users to export query results as JSON or CSV, facilitating seamless integration with other tools and systems.
- **Toast Notifications** : Instantly receive concise and informative notifications alerting users to critical events and error messages, ensuring swift awareness of potential issues.

### Performance

Google Lighthouse
![lighthouse](/public/lighthouse.png)

Page Speed
![pagespeed](/public/pagespeed.png)

### Optimization

1. **useMemo & useCallback:** I used useMemo(Memoization) to optimize the handleQueryRun function, preventing unnecessary recalculations, and useCallback to memoize the onChange callback for efficient rendering and improved user interaction in the application.
2. **Dynamic Imports:** Employed dynamic imports for functions like Copy and Clear, etc to efficiently load and execute them when needed.
3. **Functional Component Memoization:** Wrapped the Sidebar component with React.memo for improved rendering performance when props remain the same.
4. **Toaster Component:** Used the Toaster component for displaying notifications, enhancing user feedback without blocking the main thread.

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
