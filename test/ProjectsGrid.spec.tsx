import { expect } from "chai";
import {sortArray} from "../src/components/ProjectsGrid";

describe("Projects Grid sorted projects tests.", () => {
    const projects = [
            {
                "creationDate": "2020-06-11T14:36:01.685Z",
                "projectName": "Hartmann Group",
                "id": "df5b8ccd-ff44-4174-872e-7045d9581c00",
                "status": "won"
            },
            {
                "creationDate": "2018-11-30T06:58:24.301Z",
                "projectName": "Stokes, Jaskolski and Watsica",
                "id": "d196063d-9424-4bb5-a3af-b32237b4c6fd",
                "status": "inProgress"
            },
            {
                "creationDate": "2020-01-07T04:08:56.641Z",
                "projectName": "Lowe, Cruickshank and Corkery",
                "id": "76a405bc-6cab-4a11-8cf3-7d9b0c8eb401",
                "status": "won"
            }
        ]
    
    const sortedProjectsAsc =[
            {
                "creationDate": "2018-11-30T06:58:24.301Z",
                "projectName": "Stokes, Jaskolski and Watsica",
                "id": "d196063d-9424-4bb5-a3af-b32237b4c6fd",
                "status": "inProgress"
            },
            {
                "creationDate": "2020-01-07T04:08:56.641Z",
                "projectName": "Lowe, Cruickshank and Corkery",
                "id": "76a405bc-6cab-4a11-8cf3-7d9b0c8eb401",
                "status": "won"
            },
            {
                "creationDate": "2020-06-11T14:36:01.685Z",
                "projectName": "Hartmann Group",
                "id": "df5b8ccd-ff44-4174-872e-7045d9581c00",
                "status": "won"
            }            
        ]
    
    const sortedProjectsDesc = [
            {
                "creationDate": "2020-06-11T14:36:01.685Z",
                "projectName": "Hartmann Group",
                "id": "df5b8ccd-ff44-4174-872e-7045d9581c00",
                "status": "won"
            },
            {
                "creationDate": "2020-01-07T04:08:56.641Z",
                "projectName": "Lowe, Cruickshank and Corkery",
                "id": "76a405bc-6cab-4a11-8cf3-7d9b0c8eb401",
                "status": "won"
            },
            {
                "creationDate": "2018-11-30T06:58:24.301Z",
                "projectName": "Stokes, Jaskolski and Watsica",
                "id": "d196063d-9424-4bb5-a3af-b32237b4c6fd",
                "status": "inProgress"
            }                     
        ]

    it("should sort projects on creation date in descending order.", () => {
        var result = sortArray(projects,"desc");
        expect(result).to.eql(sortedProjectsDesc);
    })

    it("should sort projects on creation date in ascending order.", () => {
        var result = sortArray(projects,"asc");
        expect(result).to.eql(sortedProjectsAsc);
    })
})