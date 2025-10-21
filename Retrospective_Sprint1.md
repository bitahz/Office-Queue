# TEMPLATE FOR RETROSPECTIVE (Team 12)

Topics Index:

- [Process measures](#process-measures)
- [Quality measures](#quality-measures)
- [General assessment](#assessment)

## PROCESS MEASURES

### Macro statistics

- Number of stories committed vs. done: 2/2
- Total points committed vs. done: 6/6
- Nr of hours planned vs. spent (as a team): 60h/59h35m

---

- Unit Tests passing: 48/48
- Code review completed: 4/4
- Code present on VCS: Yes
- End-to-End tests performed: 0/5

We considered the story done according to the base Definition of Done

> Please refine your DoD if required (you cannot remove items!)

### Detailed statistics

| Story            | # Tasks | Points | Hours est. | Hours actual |
| ---------------- | ------- | ------ | ---------- | ------------ |
| _Uncategorized_  | 5       | /      | 23h 40m    | 25h          |
| 1: Get Ticket    | 11      | 3      | 23h 20m    | 23h 45m      |
| 2: Next Customer | 8       | 3      | 13h        | 10h 50m      |

> story `Uncategorized` is for technical tasks, leave out story points (not applicable in this case)

- Hours per task average, standard deviation (estimate and actual)

|            | Mean   | StDev  |
| ---------- | ------ | ------ |
| Estimation | 2h 30m | 1h 37m |
| Actual     | 2h 29m | 1h 40m |

#### Calculations

**Mean (Estimation):**

$$
\begin{align*}
\text{Mean} &= \frac{\sum \text{Hours estimated}}{\text{Number of tasks}} = \frac{23h\,40m + 23h\,20m + 13h}{24} = \frac{60h}{24} = 2h\,30m
\end{align*}
$$

**Standard Deviation (Estimation):**

$$
\begin{align*}
\text{StDev} &= \sqrt{\frac{\sum (x_i - \bar{x})^2}{n}} \approx 1h\,37m
\end{align*}
$$

**Mean (Actual):**

$$
\begin{align*}
\text{Mean} &= \frac{\sum \text{Hours actual}}{\text{Number of tasks}} = \frac{25h + 23h\,45m + 10h\,50m}{24} = \frac{59h\,35m}{24} \approx 2h\,29m
\end{align*}
$$

**Standard Deviation (Actual):**

$$
\begin{align*}
\text{StDev} &= \sqrt{\frac{\sum (x_i - \bar{x})^2}{n}} \approx 1h\,40m
\end{align*}
$$

---

- Total estimation error ratio: sum of total hours spent / sum of total hours effort - 1

  $$\frac{\sum_i spent_{task_i}}{\sum_i estimation_{task_i}} - 1 = \frac{59h\,35m}{60h} - 1 = \frac{59.58h}{60h} - 1 \approx -0.007 \text{ (or } -0.7\% \text{)}$$

- Absolute relative task estimation error: sum( abs( spent-task-i / estimation-task-i - 1))/n

  $$\frac{1}{n}\sum_i^n \left| \frac{spent_{task_i}}{estimation_task_i}-1 \right| = \frac{1}{24}\sum_i^{24} \left| \frac{spent_{task_i}}{estimation_{task_i}}-1 \right| \approx 0.24 \text{ (or } 24\% \text{)}$$

## QUALITY MEASURES

- Unit Testing:
  - Total hours estimated: 4h
  - Total hours spent: 5h
  - Nr of automated unit test cases 48
  - Coverage 74.46%
- E2E testing:
  - Total hours estimated 1h
  - Total hours spent 2h
  - Nr of test cases 5
- Code review
  - Total hours estimated 5h
  - Total hours spent 5h 40m

## ASSESSMENT

- What did go wrong in the sprint?

  Task Assignment – Lack of clarity and excessive self-assignment led to confusion about ownership

  Team Organization – Non-excellent team coordination and infrequent meetings prevented a shared understanding of the overall situation

  Testing Process – Changes occurred after testing, causing e2e test to fail

- What caused your errors in estimation (if any)?
  Maybe the unexperience with estimations led to some inaccuracy in the following stories:
  - In _uncategorized_ stories we underestimate the github setup and database design tasks
  - In _Get Ticket_ story while the estimated and actual hours match, we overestimate the write documentation but we underestimate the backend and testing tasks
  - In the _next customer_ story we overestimate the frontend tasks

- What lessons did you learn (both positive and negative) in this sprint?
  - Rely on the work of our teammates
  - A good work enviroment leads to better productivity
  - The value of a well-structured documentation in projects
  - The importance of a good sprint plan to avoid organizational problems

- Which improvement goals set in the previous retrospective were you able to achieve? None

- Which ones you were not able to achieve? Why? None

- Improvement goals for the next sprint and how to achieve them (technical tasks, team coordination, etc.)
  - think deeper about time estimation before assign tasks
  - assign/pick all tasks before starting work on the sprint
  - start with a more clear plan/path and documentation
    > Propose one or two

- One thing you are proud of as a Team!!
  As a team we are proud of how we worked together managing to create a positive, collaborative environment that led to a strong final product at the end of the sprint
