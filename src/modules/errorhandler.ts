// Purpose: Error handling for the application.
export function errorHandler(error: Error, errorText: string) {
  console.error(error);
  alert(errorText);
}
