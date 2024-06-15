/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Repository = ({repository}) => {
  return (
    <a href={repository.html_url} target="_blank" className="bg-[rgb(42,42,114)] rounded-md text-[12px] py-[4px] px-[8px]">{repository.name}</a>
  )
}

export default Repository
