"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, Truck, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import etsData from "@/lib/mock/ets"

export default function TrailersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGroup, setSelectedGroup] = useState("all")

  const trailerGroups = useMemo(() => {
    const manufacturers = [...new Set(etsData.trailers.map(trailer => trailer.manufacturer))].sort()
    const groups: Record<string, string[]> = {}
    
    manufacturers.forEach(manufacturer => {
      if (manufacturer === "Krone") {
        groups["Krone"] = ["Krone"]
      } else if (manufacturer === "Schwarzmüller") {
        groups["Schwarzmüller"] = ["Schwarzmüller"]
      } else {
        if (!groups["Standard Trailers"]) {
          groups["Standard Trailers"] = []
        }
        groups["Standard Trailers"].push(manufacturer)
      }
    })
    
    return groups
  }, [])

  const filteredAndGroupedTrailers = useMemo(() => {
    let filtered = etsData.trailers.filter(trailer => {
      const matchesSearch = trailer.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          trailer.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          trailer.bodyType.toLowerCase().includes(searchTerm.toLowerCase())
      
      if (selectedGroup === "all") return matchesSearch
      
      const groupManufacturers = trailerGroups[selectedGroup as keyof typeof trailerGroups] || []
      const matchesGroup = groupManufacturers.includes(trailer.manufacturer)
      
      return matchesSearch && matchesGroup
    })

    const grouped = Object.entries(trailerGroups).reduce((acc, [groupName, manufacturers]) => {
      const groupTrailers = filtered.filter(trailer => manufacturers.includes(trailer.manufacturer))
      if (groupTrailers.length > 0) {
        acc[groupName] = groupTrailers
      }
      return acc
    }, {} as Record<string, typeof etsData.trailers>)

    return grouped
  }, [searchTerm, selectedGroup])

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Back Button */}
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Назад на главную
          </Button>
        </Link>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Прицепы ETS2</h1>
        <p className="text-xl text-muted-foreground">
          Изучите все доступные прицепы в Euro Truck Simulator 2
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по производителю, модели или типу кузова..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedGroup} onValueChange={setSelectedGroup}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Фильтр по группе" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все группы</SelectItem>
              {Object.keys(trailerGroups).map(group => (
                <SelectItem key={group} value={group}>
                  {group}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Trailers by Group */}
      <div className="space-y-12">
        {Object.entries(filteredAndGroupedTrailers)
          .sort(([a], [b]) => {
            if (a === "Standard Trailers") return -1
            if (b === "Standard Trailers") return 1
            return a.localeCompare(b)
          })
          .map(([groupName, trailers]) => (
          <div key={groupName} className="space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">{groupName}</h2>
              <Separator className="mt-4" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {trailers.map((trailer, index) => {
                const trailerSlug = `${trailer.manufacturer}-${trailer.model}`.toLowerCase().replace(/\s+/g, '-')
                return (
                  <Link key={`${trailer.manufacturer}-${trailer.model}-${index}`} href={`/trailers/${trailerSlug}`}>
                    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 group py-0">
                      <CardContent className="p-0">
                        <div className="aspect-video relative overflow-hidden rounded-t-lg">
                          <Image
                            src={trailer.imagePath}
                            alt={`${trailer.manufacturer} ${trailer.model}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-200"
                          />
                        </div>
                        <div className="p-4 text-center space-y-2">
                          <h3 className="font-semibold text-lg">{trailer.model}</h3>
                          <Badge variant="secondary">
                            {trailer.bodyType}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {Object.keys(filteredAndGroupedTrailers).length === 0 && (
        <div className="text-center py-12">
          <Truck className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">Прицепы не найдены</h3>
          <p className="text-muted-foreground">
            Попробуйте изменить критерии поиска или фильтры
          </p>
        </div>
      )}
    </div>
  )
}