const ErrorComponent = (): JSX.Element => {
  return (
    <div className='vh-center'>
      <div className="alert alert-danger alert-dismissible fade show">
        <strong>Error!</strong> A problem has occurred. Please try again later. 
      </div>
    </div>
  )
}

export default ErrorComponent