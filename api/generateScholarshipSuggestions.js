// api/generateScholarshipSuggestions.js
const scholarships = [ 
  
    {
      "id": 1,
      "name": "Scholarship 1",
      "degree": "M.Tech",
      "category": "OBC",
      "min_gpa": 8.27,
      "provider": "Govt of India",
      "career_goal": "Commerce",
      "amount": 61625,
      "deadline": "15-05-2025"
    },
    {
      "id": 2,
      "name": "Scholarship 2",
      "degree": "B.Tech",
      "category": "ST",
      "min_gpa": 7.23,
      "provider": "State Govt",
      "career_goal": "Arts",
      "amount": 47779,
      "deadline": "03-11-2025"
    },
    {
      "id": 3,
      "name": "Scholarship 3",
      "degree": "MBA",
      "category": "SC",
      "min_gpa": 9.2,
      "provider": "Govt of India",
      "career_goal": "Commerce",
      "amount": 82498,
      "deadline": "04-10-2025"
    },
    {
      "id": 4,
      "name": "Scholarship 4",
      "degree": "PhD",
      "category": "General",
      "min_gpa": 7.35,
      "provider": "CSR Initiative",
      "career_goal": "Commerce",
      "amount": 53990,
      "deadline": "25-03-2025"
    },
    {
      "id": 5,
      "name": "Scholarship 5",
      "degree": "BA",
      "category": "ST",
      "min_gpa": 8.25,
      "provider": "NGO",
      "career_goal": "Engineering",
      "amount": 61886,
      "deadline": "17-10-2025"
    },
    {
      "id": 6,
      "name": "Scholarship 6",
      "degree": "M.Tech",
      "category": "General",
      "min_gpa": 7.7,
      "provider": "Private Org",
      "career_goal": "Research",
      "amount": 34389,
      "deadline": "18-09-2025"
    },
    {
      "id": 7,
      "name": "Scholarship 7",
      "degree": "B.Tech",
      "category": "ST",
      "min_gpa": 8.94,
      "provider": "CSR Initiative",
      "career_goal": "Arts",
      "amount": 55231,
      "deadline": "12-02-2025"
    },
    {
      "id": 8,
      "name": "Scholarship 8",
      "degree": "B.Tech",
      "category": "EWS",
      "min_gpa": 8.26,
      "provider": "Govt of India",
      "career_goal": "Commerce",
      "amount": 67805,
      "deadline": "10-02-2025"
    },
    {
      "id": 9,
      "name": "Scholarship 9",
      "degree": "BA",
      "category": "EWS",
      "min_gpa": 6.06,
      "provider": "State Govt",
      "career_goal": "Research",
      "amount": 23472,
      "deadline": "15-02-2025"
    },
    {
      "id": 10,
      "name": "Scholarship 10",
      "degree": "MBBS",
      "category": "ST",
      "min_gpa": 9.05,
      "provider": "CSR Initiative",
      "career_goal": "Research",
      "amount": 64234,
      "deadline": "18-10-2025"
    },
    {
      "id": 11,
      "name": "Scholarship 11",
      "degree": "B.Tech",
      "category": "EWS",
      "min_gpa": 9.47,
      "provider": "NGO",
      "career_goal": "Medicine",
      "amount": 11674,
      "deadline": "13-12-2025"
    },
    {
      "id": 12,
      "name": "Scholarship 12",
      "degree": "B.Tech",
      "category": "SC",
      "min_gpa": 6.45,
      "provider": "Private Org",
      "career_goal": "Commerce",
      "amount": 60261,
      "deadline": "08-10-2025"
    },
    {
      "id": 13,
      "name": "Scholarship 13",
      "degree": "MA",
      "category": "EWS",
      "min_gpa": 7.99,
      "provider": "CSR Initiative",
      "career_goal": "Arts",
      "amount": 59597,
      "deadline": "27-03-2025"
    },
    {
      "id": 14,
      "name": "Scholarship 14",
      "degree": "B.Sc",
      "category": "General",
      "min_gpa": 6.97,
      "provider": "Private Org",
      "career_goal": "Arts",
      "amount": 66934,
      "deadline": "10-02-2025"
    },
    {
      "id": 15,
      "name": "Scholarship 15",
      "degree": "B.Sc",
      "category": "General",
      "min_gpa": 7.35,
      "provider": "Govt of India",
      "career_goal": "Arts",
      "amount": 78746,
      "deadline": "03-03-2025"
    },
    {
      "id": 16,
      "name": "Scholarship 16",
      "degree": "MBBS",
      "category": "EWS",
      "min_gpa": 8.99,
      "provider": "State Govt",
      "career_goal": "Arts",
      "amount": 54690,
      "deadline": "21-04-2025"
    },
    {
      "id": 17,
      "name": "Scholarship 17",
      "degree": "M.Tech",
      "category": "ST",
      "min_gpa": 7.25,
      "provider": "NGO",
      "career_goal": "Research",
      "amount": 75365,
      "deadline": "19-11-2025"
    },
    {
      "id": 18,
      "name": "Scholarship 18",
      "degree": "BA",
      "category": "EWS",
      "min_gpa": 9.15,
      "provider": "CSR Initiative",
      "career_goal": "Engineering",
      "amount": 21514,
      "deadline": "20-12-2025"
    },
    {
      "id": 19,
      "name": "Scholarship 19",
      "degree": "PhD",
      "category": "General",
      "min_gpa": 8.34,
      "provider": "Govt of India",
      "career_goal": "Commerce",
      "amount": 75827,
      "deadline": "01-04-2025"
    },
    {
      "id": 20,
      "name": "Scholarship 20",
      "degree": "BA",
      "category": "General",
      "min_gpa": 7.11,
      "provider": "Govt of India",
      "career_goal": "Medicine",
      "amount": 42658,
      "deadline": "22-08-2025"
    },
    {
      "id": 21,
      "name": "Scholarship 21",
      "degree": "MBBS",
      "category": "EWS",
      "min_gpa": 8.51,
      "provider": "State Govt",
      "career_goal": "Arts",
      "amount": 42629,
      "deadline": "02-02-2025"
    },
    {
      "id": 22,
      "name": "Scholarship 22",
      "degree": "PhD",
      "category": "SC",
      "min_gpa": 6.71,
      "provider": "Private Org",
      "career_goal": "Science",
      "amount": 77193,
      "deadline": "05-10-2025"
    },
    {
      "id": 23,
      "name": "Scholarship 23",
      "degree": "MBBS",
      "category": "General",
      "min_gpa": 8.96,
      "provider": "NGO",
      "career_goal": "Research",
      "amount": 87588,
      "deadline": "14-01-2025"
    },
    {
      "id": 24,
      "name": "Scholarship 24",
      "degree": "B.Sc",
      "category": "EWS",
      "min_gpa": 6.99,
      "provider": "Private Org",
      "career_goal": "Research",
      "amount": 93939,
      "deadline": "16-08-2025"
    },
    {
      "id": 25,
      "name": "Scholarship 25",
      "degree": "MBBS",
      "category": "OBC",
      "min_gpa": 7.3,
      "provider": "Private Org",
      "career_goal": "Science",
      "amount": 69095,
      "deadline": "16-03-2025"
    },
    {
      "id": 26,
      "name": "Scholarship 26",
      "degree": "B.Sc",
      "category": "ST",
      "min_gpa": 6.89,
      "provider": "State Govt",
      "career_goal": "Research",
      "amount": 69015,
      "deadline": "24-04-2025"
    },
    {
      "id": 27,
      "name": "Scholarship 27",
      "degree": "B.Sc",
      "category": "ST",
      "min_gpa": 8.26,
      "provider": "CSR Initiative",
      "career_goal": "Science",
      "amount": 50706,
      "deadline": "22-08-2025"
    },
    {
      "id": 28,
      "name": "Scholarship 28",
      "degree": "M.Tech",
      "category": "SC",
      "min_gpa": 9.01,
      "provider": "Private Org",
      "career_goal": "Engineering",
      "amount": 84368,
      "deadline": "25-07-2025"
    },
    {
      "id": 29,
      "name": "Scholarship 29",
      "degree": "PhD",
      "category": "General",
      "min_gpa": 7.3,
      "provider": "Govt of India",
      "career_goal": "Science",
      "amount": 17696,
      "deadline": "26-01-2025"
    },
    {
      "id": 30,
      "name": "Scholarship 30",
      "degree": "PhD",
      "category": "SC",
      "min_gpa": 6.37,
      "provider": "CSR Initiative",
      "career_goal": "Arts",
      "amount": 96837,
      "deadline": "02-07-2025"
    },
    {
      "id": 31,
      "name": "Scholarship 31",
      "degree": "MBBS",
      "category": "OBC",
      "min_gpa": 9.13,
      "provider": "NGO",
      "career_goal": "Arts",
      "amount": 91668,
      "deadline": "01-10-2025"
    },
    {
      "id": 32,
      "name": "Scholarship 32",
      "degree": "MBBS",
      "category": "EWS",
      "min_gpa": 7.31,
      "provider": "NGO",
      "career_goal": "Engineering",
      "amount": 57847,
      "deadline": "09-01-2025"
    },
    {
      "id": 33,
      "name": "Scholarship 33",
      "degree": "M.Sc",
      "category": "General",
      "min_gpa": 7.33,
      "provider": "State Govt",
      "career_goal": "Research",
      "amount": 64807,
      "deadline": "27-07-2025"
    },
    {
      "id": 34,
      "name": "Scholarship 34",
      "degree": "B.Sc",
      "category": "ST",
      "min_gpa": 8.64,
      "provider": "State Govt",
      "career_goal": "Science",
      "amount": 41461,
      "deadline": "03-08-2025"
    },
    {
      "id": 35,
      "name": "Scholarship 35",
      "degree": "B.Tech",
      "category": "General",
      "min_gpa": 6.2,
      "provider": "Private Org",
      "career_goal": "Medicine",
      "amount": 18861,
      "deadline": "24-08-2025"
    },
    {
      "id": 36,
      "name": "Scholarship 36",
      "degree": "PhD",
      "category": "OBC",
      "min_gpa": 8.13,
      "provider": "Govt of India",
      "career_goal": "Medicine",
      "amount": 92023,
      "deadline": "13-07-2025"
    },
    {
      "id": 37,
      "name": "Scholarship 37",
      "degree": "MBBS",
      "category": "General",
      "min_gpa": 7.88,
      "provider": "Govt of India",
      "career_goal": "Science",
      "amount": 93748,
      "deadline": "11-10-2025"
    },
    {
      "id": 38,
      "name": "Scholarship 38",
      "degree": "MBA",
      "category": "General",
      "min_gpa": 6.18,
      "provider": "NGO",
      "career_goal": "Commerce",
      "amount": 61937,
      "deadline": "12-04-2025"
    },
    {
      "id": 39,
      "name": "Scholarship 39",
      "degree": "MBA",
      "category": "SC",
      "min_gpa": 6.21,
      "provider": "NGO",
      "career_goal": "Research",
      "amount": 86607,
      "deadline": "17-07-2025"
    },
    {
      "id": 40,
      "name": "Scholarship 40",
      "degree": "PhD",
      "category": "OBC",
      "min_gpa": 9.2,
      "provider": "NGO",
      "career_goal": "Science",
      "amount": 99590,
      "deadline": "04-05-2025"
    },
    {
      "id": 41,
      "name": "Scholarship 41",
      "degree": "M.Tech",
      "category": "General",
      "min_gpa": 7.44,
      "provider": "Private Org",
      "career_goal": "Commerce",
      "amount": 47184,
      "deadline": "27-05-2025"
    },
    {
      "id": 42,
      "name": "Scholarship 42",
      "degree": "MBBS",
      "category": "ST",
      "min_gpa": 9.28,
      "provider": "Private Org",
      "career_goal": "Research",
      "amount": 86674,
      "deadline": "23-12-2025"
    },
    {
      "id": 43,
      "name": "Scholarship 43",
      "degree": "BA",
      "category": "SC",
      "min_gpa": 8.17,
      "provider": "CSR Initiative",
      "career_goal": "Engineering",
      "amount": 90344,
      "deadline": "12-02-2025"
    },
    {
      "id": 44,
      "name": "Scholarship 44",
      "degree": "B.Sc",
      "category": "SC",
      "min_gpa": 6.4,
      "provider": "Private Org",
      "career_goal": "Research",
      "amount": 28397,
      "deadline": "13-12-2025"
    },
    {
      "id": 45,
      "name": "Scholarship 45",
      "degree": "B.Sc",
      "category": "ST",
      "min_gpa": 8.76,
      "provider": "State Govt",
      "career_goal": "Science",
      "amount": 33333,
      "deadline": "13-10-2025"
    },
    {
      "id": 46,
      "name": "Scholarship 46",
      "degree": "BA",
      "category": "General",
      "min_gpa": 6.97,
      "provider": "CSR Initiative",
      "career_goal": "Research",
      "amount": 89706,
      "deadline": "25-07-2025"
    },
    {
      "id": 47,
      "name": "Scholarship 47",
      "degree": "M.Tech",
      "category": "OBC",
      "min_gpa": 8.21,
      "provider": "State Govt",
      "career_goal": "Commerce",
      "amount": 73217,
      "deadline": "26-10-2025"
    },
    {
      "id": 48,
      "name": "Scholarship 48",
      "degree": "MBBS",
      "category": "OBC",
      "min_gpa": 8.27,
      "provider": "Govt of India",
      "career_goal": "Research",
      "amount": 14698,
      "deadline": "25-10-2025"
    },
    {
      "id": 49,
      "name": "Scholarship 49",
      "degree": "M.Tech",
      "category": "ST",
      "min_gpa": 6.84,
      "provider": "Govt of India",
      "career_goal": "Arts",
      "amount": 32285,
      "deadline": "26-11-2025"
    },
    {
      "id": 50,
      "name": "Scholarship 50",
      "degree": "M.Sc",
      "category": "ST",
      "min_gpa": 7.69,
      "provider": "CSR Initiative",
      "career_goal": "Commerce",
      "amount": 43275,
      "deadline": "15-04-2025"
    },
    {
      "id": 51,
      "name": "Scholarship 51",
      "degree": "M.Tech",
      "category": "OBC",
      "min_gpa": 7.64,
      "provider": "Private Org",
      "career_goal": "Research",
      "amount": 94368,
      "deadline": "23-07-2025"
    },
    {
      "id": 52,
      "name": "Scholarship 52",
      "degree": "MA",
      "category": "General",
      "min_gpa": 6.26,
      "provider": "Private Org",
      "career_goal": "Commerce",
      "amount": 73118,
      "deadline": "04-06-2025"
    },
    {
      "id": 53,
      "name": "Scholarship 53",
      "degree": "PhD",
      "category": "OBC",
      "min_gpa": 8.52,
      "provider": "State Govt",
      "career_goal": "Commerce",
      "amount": 13725,
      "deadline": "19-01-2025"
    },
    {
      "id": 54,
      "name": "Scholarship 54",
      "degree": "B.Sc",
      "category": "EWS",
      "min_gpa": 8.07,
      "provider": "Govt of India",
      "career_goal": "Medicine",
      "amount": 89115,
      "deadline": "28-02-2025"
    },
    {
      "id": 55,
      "name": "Scholarship 55",
      "degree": "B.Sc",
      "category": "OBC",
      "min_gpa": 8.61,
      "provider": "CSR Initiative",
      "career_goal": "Science",
      "amount": 46939,
      "deadline": "19-03-2025"
    },
    {
      "id": 56,
      "name": "Scholarship 56",
      "degree": "M.Sc",
      "category": "EWS",
      "min_gpa": 9,
      "provider": "State Govt",
      "career_goal": "Arts",
      "amount": 50787,
      "deadline": "11-03-2025"
    },
    {
      "id": 57,
      "name": "Scholarship 57",
      "degree": "MBA",
      "category": "ST",
      "min_gpa": 9.06,
      "provider": "CSR Initiative",
      "career_goal": "Science",
      "amount": 24170,
      "deadline": "02-08-2025"
    },
    {
      "id": 58,
      "name": "Scholarship 58",
      "degree": "PhD",
      "category": "OBC",
      "min_gpa": 7.38,
      "provider": "State Govt",
      "career_goal": "Arts",
      "amount": 96885,
      "deadline": "14-07-2025"
    },
    {
      "id": 59,
      "name": "Scholarship 59",
      "degree": "B.Tech",
      "category": "ST",
      "min_gpa": 8.89,
      "provider": "NGO",
      "career_goal": "Engineering",
      "amount": 85125,
      "deadline": "27-01-2025"
    },
    {
      "id": 60,
      "name": "Scholarship 60",
      "degree": "B.Sc",
      "category": "EWS",
      "min_gpa": 7.29,
      "provider": "Private Org",
      "career_goal": "Research",
      "amount": 22009,
      "deadline": "26-01-2025"
    },
    {
      "id": 61,
      "name": "Scholarship 61",
      "degree": "MBA",
      "category": "SC",
      "min_gpa": 9.12,
      "provider": "CSR Initiative",
      "career_goal": "Medicine",
      "amount": 52923,
      "deadline": "25-01-2025"
    },
    {
      "id": 62,
      "name": "Scholarship 62",
      "degree": "BA",
      "category": "General",
      "min_gpa": 8.34,
      "provider": "State Govt",
      "career_goal": "Medicine",
      "amount": 90148,
      "deadline": "01-06-2025"
    },
    {
      "id": 63,
      "name": "Scholarship 63",
      "degree": "MBBS",
      "category": "General",
      "min_gpa": 6.01,
      "provider": "Govt of India",
      "career_goal": "Medicine",
      "amount": 36028,
      "deadline": "26-06-2025"
    },
    {
      "id": 64,
      "name": "Scholarship 64",
      "degree": "MBBS",
      "category": "General",
      "min_gpa": 7.14,
      "provider": "Private Org",
      "career_goal": "Research",
      "amount": 81033,
      "deadline": "05-02-2025"
    },
    {
      "id": 65,
      "name": "Scholarship 65",
      "degree": "MBBS",
      "category": "SC",
      "min_gpa": 7.12,
      "provider": "Private Org",
      "career_goal": "Arts",
      "amount": 69624,
      "deadline": "27-02-2025"
    },
    {
      "id": 66,
      "name": "Scholarship 66",
      "degree": "PhD",
      "category": "SC",
      "min_gpa": 8.56,
      "provider": "CSR Initiative",
      "career_goal": "Engineering",
      "amount": 75602,
      "deadline": "10-02-2025"
    },
    {
      "id": 67,
      "name": "Scholarship 67",
      "degree": "MA",
      "category": "General",
      "min_gpa": 7.36,
      "provider": "Govt of India",
      "career_goal": "Commerce",
      "amount": 72362,
      "deadline": "10-12-2025"
    },
    {
      "id": 68,
      "name": "Scholarship 68",
      "degree": "BA",
      "category": "ST",
      "min_gpa": 7.7,
      "provider": "Govt of India",
      "career_goal": "Engineering",
      "amount": 88821,
      "deadline": "05-01-2025"
    },
    {
      "id": 69,
      "name": "Scholarship 69",
      "degree": "M.Sc",
      "category": "SC",
      "min_gpa": 8.29,
      "provider": "Private Org",
      "career_goal": "Science",
      "amount": 29536,
      "deadline": "10-01-2025"
    },
    {
      "id": 70,
      "name": "Scholarship 70",
      "degree": "BA",
      "category": "SC",
      "min_gpa": 6.58,
      "provider": "CSR Initiative",
      "career_goal": "Research",
      "amount": 87351,
      "deadline": "19-10-2025"
    },
    {
      "id": 71,
      "name": "Scholarship 71",
      "degree": "B.Sc",
      "category": "General",
      "min_gpa": 6.95,
      "provider": "Govt of India",
      "career_goal": "Engineering",
      "amount": 82315,
      "deadline": "18-06-2025"
    },
    {
      "id": 72,
      "name": "Scholarship 72",
      "degree": "M.Sc",
      "category": "ST",
      "min_gpa": 8.4,
      "provider": "Govt of India",
      "career_goal": "Medicine",
      "amount": 11149,
      "deadline": "13-06-2025"
    },
    {
      "id": 73,
      "name": "Scholarship 73",
      "degree": "M.Sc",
      "category": "EWS",
      "min_gpa": 6.92,
      "provider": "Govt of India",
      "career_goal": "Engineering",
      "amount": 17238,
      "deadline": "15-08-2025"
    },
    {
      "id": 74,
      "name": "Scholarship 74",
      "degree": "B.Sc",
      "category": "General",
      "min_gpa": 9.13,
      "provider": "Private Org",
      "career_goal": "Engineering",
      "amount": 30357,
      "deadline": "11-10-2025"
    },
    {
      "id": 75,
      "name": "Scholarship 75",
      "degree": "M.Tech",
      "category": "ST",
      "min_gpa": 7.76,
      "provider": "Govt of India",
      "career_goal": "Arts",
      "amount": 29746,
      "deadline": "09-04-2025"
    },
    {
      "id": 76,
      "name": "Scholarship 76",
      "degree": "MBA",
      "category": "OBC",
      "min_gpa": 7.31,
      "provider": "CSR Initiative",
      "career_goal": "Arts",
      "amount": 20697,
      "deadline": "23-04-2025"
    },
    {
      "id": 77,
      "name": "Scholarship 77",
      "degree": "M.Tech",
      "category": "ST",
      "min_gpa": 9.45,
      "provider": "NGO",
      "career_goal": "Arts",
      "amount": 11528,
      "deadline": "19-09-2025"
    },
    {
      "id": 78,
      "name": "Scholarship 78",
      "degree": "PhD",
      "category": "SC",
      "min_gpa": 6.03,
      "provider": "CSR Initiative",
      "career_goal": "Engineering",
      "amount": 36093,
      "deadline": "26-05-2025"
    },
    {
      "id": 79,
      "name": "Scholarship 79",
      "degree": "MBBS",
      "category": "OBC",
      "min_gpa": 8.81,
      "provider": "State Govt",
      "career_goal": "Science",
      "amount": 59602,
      "deadline": "09-01-2025"
    },
    {
      "id": 80,
      "name": "Scholarship 80",
      "degree": "BA",
      "category": "General",
      "min_gpa": 8.09,
      "provider": "Govt of India",
      "career_goal": "Engineering",
      "amount": 80629,
      "deadline": "06-01-2025"
    },
    {
      "id": 81,
      "name": "Scholarship 81",
      "degree": "MA",
      "category": "OBC",
      "min_gpa": 7.71,
      "provider": "Govt of India",
      "career_goal": "Commerce",
      "amount": 72237,
      "deadline": "15-08-2025"
    },
    {
      "id": 82,
      "name": "Scholarship 82",
      "degree": "PhD",
      "category": "ST",
      "min_gpa": 7.83,
      "provider": "NGO",
      "career_goal": "Medicine",
      "amount": 96480,
      "deadline": "05-05-2025"
    },
    {
      "id": 83,
      "name": "Scholarship 83",
      "degree": "MBBS",
      "category": "ST",
      "min_gpa": 7.65,
      "provider": "Private Org",
      "career_goal": "Science",
      "amount": 84014,
      "deadline": "11-02-2025"
    },
    {
      "id": 84,
      "name": "Scholarship 84",
      "degree": "B.Tech",
      "category": "General",
      "min_gpa": 8.5,
      "provider": "Private Org",
      "career_goal": "Research",
      "amount": 52403,
      "deadline": "16-07-2025"
    },
    {
      "id": 85,
      "name": "Scholarship 85",
      "degree": "MBA",
      "category": "ST",
      "min_gpa": 6.06,
      "provider": "Private Org",
      "career_goal": "Commerce",
      "amount": 26094,
      "deadline": "15-10-2025"
    },
    {
      "id": 86,
      "name": "Scholarship 86",
      "degree": "MBA",
      "category": "EWS",
      "min_gpa": 6,
      "provider": "CSR Initiative",
      "career_goal": "Arts",
      "amount": 51010,
      "deadline": "27-02-2025"
    },
    {
      "id": 87,
      "name": "Scholarship 87",
      "degree": "BA",
      "category": "ST",
      "min_gpa": 8.68,
      "provider": "NGO",
      "career_goal": "Engineering",
      "amount": 34714,
      "deadline": "04-06-2025"
    },
    {
      "id": 88,
      "name": "Scholarship 88",
      "degree": "B.Sc",
      "category": "OBC",
      "min_gpa": 7.99,
      "provider": "NGO",
      "career_goal": "Science",
      "amount": 79124,
      "deadline": "07-12-2025"
    },
    {
      "id": 89,
      "name": "Scholarship 89",
      "degree": "MBBS",
      "category": "SC",
      "min_gpa": 9.23,
      "provider": "CSR Initiative",
      "career_goal": "Science",
      "amount": 24977,
      "deadline": "09-11-2025"
    },
    {
      "id": 90,
      "name": "Scholarship 90",
      "degree": "BA",
      "category": "ST",
      "min_gpa": 6.03,
      "provider": "CSR Initiative",
      "career_goal": "Science",
      "amount": 92690,
      "deadline": "19-07-2025"
    },
    {
      "id": 91,
      "name": "Scholarship 91",
      "degree": "MBBS",
      "category": "SC",
      "min_gpa": 7.62,
      "provider": "Govt of India",
      "career_goal": "Engineering",
      "amount": 41050,
      "deadline": "19-11-2025"
    },
    {
      "id": 92,
      "name": "Scholarship 92",
      "degree": "MBBS",
      "category": "SC",
      "min_gpa": 7.47,
      "provider": "CSR Initiative",
      "career_goal": "Engineering",
      "amount": 83016,
      "deadline": "07-04-2025"
    },
    {
      "id": 93,
      "name": "Scholarship 93",
      "degree": "MA",
      "category": "SC",
      "min_gpa": 7.82,
      "provider": "Govt of India",
      "career_goal": "Science",
      "amount": 97310,
      "deadline": "05-09-2025"
    },
    {
      "id": 94,
      "name": "Scholarship 94",
      "degree": "M.Sc",
      "category": "SC",
      "min_gpa": 6.04,
      "provider": "CSR Initiative",
      "career_goal": "Commerce",
      "amount": 87804,
      "deadline": "04-06-2025"
    },
    {
      "id": 95,
      "name": "Scholarship 95",
      "degree": "BA",
      "category": "General",
      "min_gpa": 8.46,
      "provider": "NGO",
      "career_goal": "Science",
      "amount": 82765,
      "deadline": "13-02-2025"
    },
    {
      "id": 96,
      "name": "Scholarship 96",
      "degree": "BA",
      "category": "OBC",
      "min_gpa": 6.69,
      "provider": "Govt of India",
      "career_goal": "Research",
      "amount": 50425,
      "deadline": "21-10-2025"
    },
    {
      "id": 97,
      "name": "Scholarship 97",
      "degree": "M.Tech",
      "category": "EWS",
      "min_gpa": 9.48,
      "provider": "Govt of India",
      "career_goal": "Engineering",
      "amount": 16225,
      "deadline": "11-01-2025"
    },
    {
      "id": 98,
      "name": "Scholarship 98",
      "degree": "MBA",
      "category": "EWS",
      "min_gpa": 9.07,
      "provider": "CSR Initiative",
      "career_goal": "Medicine",
      "amount": 85972,
      "deadline": "10-08-2025"
    },
    {
      "id": 99,
      "name": "Scholarship 99",
      "degree": "PhD",
      "category": "SC",
      "min_gpa": 6.14,
      "provider": "NGO",
      "career_goal": "Commerce",
      "amount": 79022,
      "deadline": "27-03-2025"
    },
    {
      "id": 100,
      "name": "Scholarship 100",
      "degree": "M.Tech",
      "category": "SC",
      "min_gpa": 7.25,
      "provider": "Private Org",
      "career_goal": "Arts",
      "amount": 95062,
      "deadline": "26-11-2025"
    }
  
];

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const formData = req.body;

  // Filter matching scholarships
  const matches = scholarships.filter(s => 
    s.degree.toLowerCase() === formData.degree.toLowerCase() &&
    s.category.toLowerCase() === formData.category.toLowerCase() &&
    parseFloat(formData.gpa) >= parseFloat(s.min_gpa)
  );

  const topMatches = matches.slice(0, 3);

  const formattedScholarships = topMatches.map(s => 
    `• ${s.name} by ${s.provider} - ₹${s.amount}, Deadline: ${s.deadline}`
  ).join('\n');

  const prompt = `
You are an education advisor helping students find scholarships.

Student Details:
- Degree: ${formData.degree}
- GPA: ${formData.gpa}
- Category: ${formData.category}
- Career Goals: ${formData.goals}

Recommend 3 scholarships from this list in simple words:
${formattedScholarships}
`;

  const API_KEY = process.env.GEMINI_API_KEY;

  const body = {
    contents: [{ role: "user", parts: [{ text: prompt }] }],
  };

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );

    const result = await response.json();

    const suggestions = result.candidates?.[0]?.content?.parts?.[0]?.text || 
      "No suggestions found.";

    res.status(200).json({ suggestions });

  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}