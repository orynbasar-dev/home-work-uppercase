import { useState } from 'react'

import Page from './layout/Page'
import SearchInput from './components/SearchInput'
import Card from './components/Card'
import Pagination from './components/Pagination'
import { useMovies } from './requests/queries'

const DEFAULT_SEARCH = 'Batman'
const ITEMS_PER_PAGE = 10
const NAPosterValue = 'N/A'

function App() {
  const [searchValue, setSearchValue] = useState(DEFAULT_SEARCH)
  const [page, setPage] = useState(1)

  const { data, isLoading } = useMovies({ search: searchValue, page })
  const movies = data?.Search || []
  const totalResults = data?.totalResults || 0

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    setPage(1)
  }

  const handleReset = () => {
    setSearchValue(DEFAULT_SEARCH)
    setPage(1)
  }

  return (
    <Page
      actionCenter={
        <SearchInput value={searchValue} onChange={handleSearch}/>
      }
      isLoading={isLoading}
      onLogoClick={handleReset}
    >
        <div className="flex gap-2 items-center">
          <p className="text-2xl">
            You searched for: <span className="underline">{searchValue}</span>
          </p>
          <div className="bg-[#6627FF] rounded-md text-sm py-2 px-4 text-white font-bold">{totalResults} results</div>
        </div>
        {movies?.length > 0 ? (
          <>
            <div className="grid sm:grid-cols-[repeat(4,_245px)] grid-cols-[repeat(2,_245px)] justify-between mt-11 gap-11">
              {movies?.map((movie) => (
                <Card
                  key={movie.imdbID}
                  poster={movie.Poster === NAPosterValue ? 'placeholder.png': movie.Poster}
                  title={movie.Title}
                  year={movie.Year}
                  type={movie.Type}
                  imdbID={movie.imdbID}
                />
              ))}
            </div>
            <Pagination
              totalCount={totalResults}
              siblingCount={1}
              currentPage={page}
              pageSize={ITEMS_PER_PAGE}
              onPageChange={(page) => setPage(page)}
              className="mt-12 m-auto"
            />
          </>
        ) : <p className="text-2xl text-center mt-11">No results found</p>}
    </Page>
  )
}

export default App
