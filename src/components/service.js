export const jobToDelete = async (idToDelete) => {
    const response = await fetch("https://64bc59d87b33a35a44472ff1.mockapi.io/jobs" + idToDelete, { method: "DELETE"})
}