package org.example.diary.mapper;

import org.example.diary.dto.EntryDTO;
import org.example.diary.entity.EntryEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface EntryMapper {
    EntryEntity toEntity(EntryDTO entryDTO);
    EntryDTO toDTO(EntryEntity entryEntity);
}
