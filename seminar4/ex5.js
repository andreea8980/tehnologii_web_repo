function increaseSalary(salaries, percent) {
    if (!Array.isArray(salaries)) {
        throw new Error("primul parametru trebuie sa fie un array de salarii");
    }

    if (typeof percent !== "number") {
        throw new Error("al doilea parametru trebuie sa fie un nr");
    }
    const increased = salaries.map(salary => salary * (1 + percent / 100));

    return increased;
}
try {
    const salaries = [1000, 2000, 35];
    const newSalaries = increaseSalary(salaries, 10);
    console.log(newSalaries); 
} catch (error) {
    console.log("Eroare:", error.message);
}

