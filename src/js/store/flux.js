const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contactList: [],
			idDelete: "",
			contactToEdit: {}
		},
		actions: {
			getData: str => {
				fetch("https://playground.4geeks.com/contact/agendas/gespana")
					.then(res => res.json())
					.then(data => setStore({ contactList: data.contacts }))
					.catch(error => console.log(error));
			},
			creaContact: user => {
				try {
					const respuesta = fetch("https://playground.4geeks.com/contact/agendas/gespana", {
						method: "POST"

					})
					if (respuesta.status == 400) {
						const { detail } = respuesta.json()
						if (detail == "User already exists.") {
							console.log(detail);

						}
					}
				} catch (error) {
					console.log(error)
				}

			},
			addContact: user => {
				fetch("https://playground.4geeks.com/contact/agendas/gespana/contacts", {
					method: "POST",
					body: JSON.stringify(user), // data can be `string` or {object}!
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(res => res.json())
					.then(response => console.log("Success:", response))
					.catch(error => console.error("Error:", error));
			},
			addidDelete: id => {
				setStore({ idDelete: id });
			},
			removeContact: () => {
				const store = getStore();
				fetch("https://playground.4geeks.com/contact/agendas/gespana/contacts/" + store.idDelete, {
					method: "DELETE"
				}).then(res => {
					if (res.ok) {
						getActions().getData();
					}
				});
			},
			editContact: (id, contact) => {
				fetch("https://playground.4geeks.com/contact/agendas/gespana/contacts/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(res => res.json())
					.then(results => console.log(setStore({ contact: results }), "estoy en setStore"))
					.catch(error => console.log("Error", error));
			},
			getContact: contact => {
				setStore({ contactToEdit: contact });
			}
		}
	};
};

export default getState;