"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Search, Filter, Download, Calendar, Package } from "lucide-react"
import etsData from "@/lib/mock/ets"

export default function DLCsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTag, setSelectedTag] = useState("all")

  const dlcTags = useMemo(() => {
    return [...new Set(etsData.dlcs.map(dlc => dlc.tag))].sort()
  }, [])

  const filteredDLCs = useMemo(() => {
    return etsData.dlcs.filter(dlc => {
      const matchesTag = selectedTag === "all" || dlc.tag === selectedTag
      
      if (!searchTerm) return matchesTag

      const searchLower = searchTerm.toLowerCase()
      const matchesSearch = dlc.name.toLowerCase().includes(searchLower)
      
      return matchesTag && matchesSearch
    })
  }, [searchTerm, selectedTag])

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const formatTag = (tag: string) => {
    return tag.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">DLC ETS2</h1>
        <p className="text-xl text-muted-foreground">
          Изучите все доступные дополнения для Euro Truck Simulator 2
        </p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Поиск по названию DLC..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Фильтр по типу" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все типы</SelectItem>
              {dlcTags.map(tag => (
                <SelectItem key={tag} value={tag}>
                  {formatTag(tag)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* DLCs List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Список DLC</h2>
        <div className="space-y-3">
          {filteredDLCs.map((dlc, index) => (
            <Card key={`compact-${index}`} className="p-4 hover:bg-muted/50 transition-colors duration-200">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  <div>
                    <h4 className="font-semibold text-lg">{dlc.name}</h4>
                  </div>
                  <div className="text-center">
                    <Badge variant="secondary">
                      {formatTag(dlc.tag)}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {dlc.content}
                  </div>
                  <div className="text-sm text-muted-foreground text-center lg:text-right">
                    {formatDate(dlc.releaseDate)}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {filteredDLCs.length === 0 && (
        <div className="text-center py-12">
          <Download className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">DLC не найдены</h3>
          <p className="text-muted-foreground">
            Попробуйте изменить критерии поиска или фильтры
          </p>
        </div>
      )}
    </div>
  )
}