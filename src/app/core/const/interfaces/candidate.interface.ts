export interface Candidate{
    role: string,
    name: string,
    contacts: {
        location: string,
        linkedInLink: string,
        gitHubLink: string
    },
    summary: string[ ],
    intro:  string
    ,
    additional: string
}