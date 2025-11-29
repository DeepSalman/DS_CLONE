import Image from "next/image"

export default function Partnership() {
  return (
    <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1dadbf] to-[#1695a8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-white">Powered by DataCamp</h2>
          <p className="text-xl text-[#e0f7fa]">
            Get free access to DataCamp's comprehensive data science courses and resources
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12 text-center">
          <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
            <div className="text-center">
              <Image
                src="/datacamp-logo.jpg"
                alt="DataCamp"
                width={200}
                height={100}
                className="mx-auto mb-4"
              />
              <p className="text-gray-700 font-semibold">Unlimited Access to Data Science Courses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
